let deck_source = {
    "buffer": {
        "灰流丽": { "name": "灰流丽", "level": "3", "stats": "炎", "race": "不死族", "atk": "0", "def": "1800" },
        "增殖的G": { "name": "增殖的G", "level": "2", "stats": "地", "race": "昆虫族", "atk": "500", "def": "200" },
        "效果遮蒙者": { "name": "效果遮蒙者", "level": "1", "stats": "光", "race": "魔法师族", "atk": "0", "def": "0" },
        "锁鸟": { "name": "锁鸟", "level": "1", "stats": "风", "race": "魔法师族", "atk": "0", "def": "0" },
        "陨石": { "name": "陨石", "level": "11", "stats": "光", "race": "岩石族", "atk": "3000", "def": "600" },
        "海龟坏兽": { "name": "海龟坏兽", "level": "8", "stats": "水", "race": "水族", "atk": "2200", "def": "3000" },
        "怒焰坏兽": { "name": "怒焰坏兽", "level": "8", "stats": "炎", "race": "恐龙族", "atk": "3000", "def": "1200" },
        "屋敷童": { "name": "屋敷童", "level": "3", "stats": "地", "race": "不死族", "atk": "0", "def": "1800" },
        "幽鬼兔": { "name": "幽鬼兔", "level": "3", "stats": "光", "race": "念动力族", "atk": "0", "def": "1800" },
        "浮幽樱": { "name": "浮幽樱", "level": "3", "stats": "暗", "race": "不死族", "atk": "0", "def": "1800" },
        "天童": { "name": "天童", "level": "1", "stats": "炎", "race": "天使族", "atk": "1500", "def": "1500" },
        "乌鸦": { "name": "乌鸦", "level": "1", "stats": "暗", "race": "鸟兽族", "atk": "100", "def": "100" },
    },
    "working": {
    }
}
// function refresh_init_ui() {
//     var deckList = document.getElementById('deckList');
//     // 清空已有选项
//     while (deckList.options.length > 0) {
//         deckList.remove(0);
//     }
//     var cardList = document.getElementById('cardList');
//     // 清空已有选项
//     while (cardList.options.length > 0) {
//         cardList.remove(0);
//     }

//     var buff = Object.entries(deck_source.buffer);
//     for (var i = 0; i < buff.length; i++) {
//         // Create a new option element
//         var newOption = document.createElement("option");
//         newOption.textContent = buff[i][0];
//         cardList.appendChild(newOption);
//     }
//     var working = Object.entries(deck_source.working);
//     for (var i = 0; i < working.length; i++) {
//         // Create a new option element
//         var newOption = document.createElement("option");
//         newOption.textContent = working[i][0];
//         deckList.appendChild(newOption);
//     }

// }

function refresh_begin() {
    var beginlist = document.getElementById('beginCard');
    // 清空已有选项
    while (beginlist.options.length > 0) {
        beginlist.remove(0);
    }
    var newOption = document.createElement("option");
    newOption.textContent = '（选择起始卡牌）';
    document.getElementById('beginCard').appendChild(newOption);

    var working = Object.entries(deck_source.working);
    for (var i = 0; i < working.length; i++) {
        // Create a new option element
        var newOption = document.createElement("option");
        newOption.textContent = working[i][0];
        beginlist.appendChild(newOption);
    }

}
function nomonster() {
    // 遍历全部选项值
    var endlist = document.getElementById('endCard');
    // 清空已有选项
    while (endlist.options.length > 0) {
        endlist.remove(0);
    }
    var newOption = document.createElement("option");
    newOption.textContent = "（没有怪兽）";
    document.getElementById('endCard').appendChild(newOption);
}
function refresh_end(tree_data) {
    // 遍历全部选项值
    var endlist = document.getElementById('endCard');
    // 清空已有选项
    while (endlist.options.length > 0) {
        endlist.remove(0);
    }
    var newOption = document.createElement("option");
    newOption.textContent = "（全部怪兽）";
    document.getElementById('endCard').appendChild(newOption);
    for (var i = 0; i < tree_data.length; i++) {
        newOption = document.createElement("option");
        newOption.textContent = tree_data[i].title;
        document.getElementById('endCard').appendChild(newOption);
    }

}

function source_to_data() {
    let ui_data = Object.entries(deck_source.buffer)
        .concat(Object.entries(deck_source.working))
        .map(([key, value]) => ({ "value": key, "title": key }));
    return ui_data
}

// Define JavaScript functions for button actions
function addCard() {
    // Get the selected values from dropdowns
    layer.open({
        type: 1,
        title: '填写卡牌描述',
        content: $('#ID-test-layer-wrapper')
    });
}

// 监听第一个列表的双击事件
// document.getElementById("cardList").addEventListener("dblclick", function () {
//     var cardList = document.getElementById("cardList");
//     // 获取选中的值
//     var selectedValue = cardList.value;

//     var deckList = document.getElementById('deckList');
//     // 创建新的选项元素并添加到右边列表中
//     var newOption = document.createElement("option");
//     newOption.value = selectedValue;
//     newOption.text = selectedValue;
//     deckList.appendChild(newOption);

//     // 获取选中的选项
//     var selectedOptions = Array.from(cardList.selectedOptions);

//     // 逐个移除选中的选项
//     selectedOptions.forEach(function (option) {
//         cardList.remove(option.index);
//     });
//     if (deck_source.buffer.hasOwnProperty(selectedValue)) {
//         deck_source.working[selectedValue] = deck_source.buffer[selectedValue];
//         delete deck_source.buffer[selectedValue];
//     }
//     refresh_begin();
//     layui.$('#world_result').css('display', 'none');
//     searchCards(1);
// });

// 监听第一个列表的点击事件
// document.getElementById("cardList").addEventListener("click", function () {
//     // 取消第二个列表的选中项
//     document.getElementById("deckList").selectedIndex = -1;
// });

// 监听第二个列表的双击事件
// document.getElementById("deckList").addEventListener("dblclick", function () {
//     var deckList = document.getElementById("deckList");
//     // 获取选中的值
//     var selectedValue = deckList.value;

//     var cardList = document.getElementById('cardList');
//     // 创建新的选项元素并添加到右边列表中
//     var newOption = document.createElement("option");
//     newOption.value = selectedValue;
//     newOption.text = selectedValue;
//     cardList.appendChild(newOption);
//     // 获取选中的选项
//     var selectedOptions = Array.from(deckList.selectedOptions);

//     // 逐个移除选中的选项
//     selectedOptions.forEach(function (option) {
//         deckList.remove(option.index);
//     });
//     if (deck_source.working.hasOwnProperty(selectedValue)) {
//         deck_source.buffer[selectedValue] = deck_source.working[selectedValue];
//         delete deck_source.working[selectedValue];
//     }
//     refresh_begin();
//     layui.$('#world_result').css('display', 'none');
//     searchCards(1);
// });

// 监听第二个列表的点击事件
// document.getElementById("deckList").addEventListener("click", function () {
//     // 取消第二个列表的选中项
//     document.getElementById("cardList").selectedIndex = -1;
// });

var layerIndex;
function importDeck() {
    // Add logic to import a deck
    layerIndex = layer.open({
        type: 1,
        title: '请粘贴套牌码（与导出的内容相同）',
        shadeClose: true,
        content: `
    <div class="layui-field-box">
    <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item layui-form-text">
        <div class="layui-input-block">
            <textarea placeholder="" class="layui-textarea" name="import_deck_code"></textarea>
        </div>
        </div>

        <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn" lay-filter="world-import-deck" lay-submit>导入</button>
        </div>
        </div>
    </form>
    </div>`
    });
}
function show_card_info(cardInfo) {
    // 构建卡牌信息内容
    var cardInfoHTML = `
    <table class="layui-table">
    <colgroup>
        <col width="150">
        <col width="150">
    </colgroup>
    <tbody>
        <tr>
            <td>名称</td>
            <td>${cardInfo.name}</td>
        </tr>
        <tr>
            <td>等级</td>
            <td>${cardInfo.level}</td>
        </tr>
        <tr>
            <td>属性</td>
            <td>${cardInfo.stats}</td>
        </tr>
        <tr>
            <td>种族</td>
            <td>${cardInfo.race}</td>
        </tr>
        <tr>
            <td>攻击力</td>
            <td>${cardInfo.atk}</td>
        </tr>
        <tr>
            <td>守备力</td>
            <td>${cardInfo.def}</td>
        </tr>
    </tbody>
    </table>
    `;

    layer.open({
        type: 1,
        title: false,
        shadeClose: true,
        content: `
    <div class="layui-field-box">`+ cardInfoHTML + `</div>`
    });
}

function viewCards() {
    var cardList = document.getElementById('cardList');
    var deckList = document.getElementById('deckList');
    var card_name = $("#beginCard").val();
    if (card_name != "（选择起始卡牌）") {
        if (deck_source.buffer.hasOwnProperty(card_name)) {
            show_card_info(deck_source.buffer[card_name]);
        } else if (deck_source.working.hasOwnProperty(card_name)) {
            show_card_info(deck_source.working[card_name]);
        }
    }
    // if (cardList.selectedIndex != -1) {
    //     var selectedValue = cardList.value;
    //     if (deck_source.buffer.hasOwnProperty(selectedValue)) {
    //         show_card_info(deck_source.buffer[selectedValue]);
    //     } else if (deck_source.working.hasOwnProperty(selectedValue)) {
    //         show_card_info(deck_source.working[selectedValue]);
    //     }

    // }
    // else if (deckList.selectedIndex != -1) {
    //     var selectedValue = deckList.value;
    //     if (deck_source.buffer.hasOwnProperty(selectedValue)) {
    //         show_card_info(deck_source.buffer[selectedValue]);
    //     } else if (deck_source.working.hasOwnProperty(selectedValue)) {
    //         show_card_info(deck_source.working[selectedValue]);
    //     }
    // }

}

layui.use(function () {
    var $ = layui.$;
    var transfer = layui.transfer;
    var layer = layui.layer;
    var util = layui.util;
    var form = layui.form;
    var tree = layui.tree;
    form.on('submit(world-import-deck)', function (data) {
        try {
            deck_source = JSON.parse(String(data.field.import_deck_code));
        } catch (error) {
            layer.alert('卡组解析失败，格式异常！第一次使用请手动添加单卡，完成后即可导出卡组代码。', {
                icon: 2,
                shadeClose: true
            });
            return false;
        }

        // 重加载
        refresh_begin();
        layer.close(layerIndex);
        layui.$('#world_result').css('display', 'none');
        transfer.reload('world_add_card_form', { data: source_to_data(), value: Object.keys(deck_source.working) });
        // layer.alert('导入成功！', {
        //     shadeClose: true
        // });
        return false;
    });

    form.on('submit(world-add-card)', function (data) {
        // 名称重复判断
        check_result = check_name(data.field.world_name)
        if (check_result) {
            layer.alert('添加失败，卡牌名 [' + data.field.world_name + '] 重复!', {
                icon: 2,
                shadeClose: true
            });
            return false;
        };
        if (data.field.world_name === "（全部怪兽）") {
            layer.alert('添加失败，卡牌名不能为[' + data.field.world_name + ']!', {
                icon: 2,
                shadeClose: true
            });
            return false;
        }
        deck_source.working[data.field.world_name] =
        {
            "name": data.field.world_name, "level": data.field.world_level, "stats": data.field.world_stats,
            "race": data.field.world_race, "atk": data.field.world_atk, "def": data.field.world_def
        };

        // 重加载
        refresh_begin();


        layer.alert('添加成功！', {
            shadeClose: true
        });

        return false;
    });
    var style1 = layui.$('#small-world').attr('style');

    transfer.set({
        width: '45%', // 所有穿梭框默认高度为自动
        // …
    });
    // 渲染
    transfer.render({
        id: 'world_add_card_form',
        elem: '#small-world',
        style: style1,
        title: ['备选卡牌', '当前卡组'],
        data: source_to_data(),
        // value: Object.keys(deck_source.working),

        onchange: function (obj, index) {
            for (let i = 0; i < obj.length; i++) {
                let card_name = obj[i].value
                if (index === 0) {
                    // 从左至右
                    deck_source.working[card_name] = deck_source.buffer[card_name]
                    delete deck_source.buffer[card_name]
                } else {
                    // 从右至左
                    deck_source.buffer[card_name] = deck_source.working[card_name]
                    delete deck_source.working[card_name]
                }
            }
            refresh_begin();
            layui.$('#world_result').css('display', 'none');
            searchCards(1);
        }
    });

});

function exportDeck() {
    // Add logic to export a deck
    layer.alert(JSON.stringify(deck_source), { title: "导出成功（请复制并保存）" });
    try {
        // 使用 Clipboard API 将文本复制到剪贴板
        navigator.clipboard.writeText(JSON.stringify(deck_source))
            .then(function () {
                layer.alert(JSON.stringify(deck_source), { title: "导出成功（已自动复制）" });
            })
            .catch(function (err) {
                layer.alert(JSON.stringify(deck_source), { title: "导出成功（请复制并保存）" });
            });
    } catch (err) {
        // console.error("复制到剪贴板失败:", err);
        layer.alert("复制到剪贴板失败", { title: "导出失败" });
    }

}

function searchCards(flag) {
    let begin_name = $("#beginCard").val();
    let end_name = "";
    if (flag == 2) {
        end_name = $("#endCard").val();
        if (end_name === "（全部怪兽）" || end_name === "（没有怪兽）") {
            end_name = "";
        }
    }
    if (begin_name === "（选择起始卡牌）") {
        if (flag == 1) {
            refresh_end([]);
        }
        return false;
    }
    let working_map = deck_source.working

    let begin_obj, end_obj;
    if (working_map.hasOwnProperty(begin_name)) {
        begin_obj = working_map[begin_name]
    }
    if (working_map.hasOwnProperty(end_name)) {
        end_obj = working_map[end_name]
    } else {
        end_obj = null;
    }

    let success_count = 0, result_detail = [];
    for (let key in working_map) {
        if (working_map.hasOwnProperty(key)) {
            let one_step = working_map[key];
            let count = world_compare(begin_obj, one_step);
            if (count !== 1) {
                continue;
            }

            for (let key_two in working_map) {
                let two_step = working_map[key_two];
                let count_two = world_compare(one_step, two_step);
                if (count_two !== 1 || begin_obj.name === two_step.name) {
                    continue;
                }

                if (end_name == "" || two_step.name === end_name) {
                    success_count++;
                    result_detail.push([begin_obj.name, one_step.name, two_step.name]);
                }

            }

        }
    }

    if (success_count === 0) {
        // layer.alert('无法检索目标卡牌!', {
        //     icon: 2,
        //     shadeClose: true
        // });
        nomonster();
        layui.$('#world_result').css('display', 'none');
        return false;
    }

    let tree_data = world_gather(result_detail);
    layui.tree.render({
        id: 'world_tree',
        elem: '#ID-tree-demo-accordion',
        data: []
    });
    layui.tree.reload('world_tree', {
        data: tree_data,
    });

    if (flag == 1) {
        refresh_end(tree_data);
        if (end_name === "（全部怪兽）" || end_name === "") {
            layui.$('#world_result').css('display', 'block');
        }
    }
    else{
        layui.$('#world_result').css('display', 'block');
    }
};



function source_to_data() {
    let ui_data = Object.entries(deck_source.buffer)
        .concat(Object.entries(deck_source.working))
        .map(([key, value]) => ({ "value": key, "title": key }));
    return ui_data
}

function check_name(name) {
    if (deck_source.buffer.hasOwnProperty(name)) {
        return true;
    } else if (deck_source.working.hasOwnProperty(name)) {
        return true;
    }


    // No duplicate found
    return false;
}

//   返回相等属性的数量
function world_compare(arg1, arg2) {
    let count = 0;
    if (arg1.level === arg2.level) count++;
    if (arg1.stats === arg2.stats) count++;
    if (arg1.race === arg2.race) count++;
    if (arg1.atk === arg2.atk) count++;
    if (arg1.def === arg2.def) count++;
    return count;
}

function world_gather(obj) {

    // 将数组转换为对象，以便按照第二项进行分组
    let groupedObj = obj.reduce((acc, [a1, a2, a3]) => {
        if (!acc[a3]) {
            acc[a3] = [];
        }
        acc[a3].push({ title: a1.padEnd(20, ' ') + " > " + a2.padEnd(20, ' ') + " > " + a3.padEnd(20, ' ') });
        return acc;
    }, {});

    // 将对象转换为最终的数据结构
    let result = Object.entries(groupedObj).map(([title, children]) => ({
        title,
        children,
    }));

    if (result.length === 1) {
        result[0]['spread'] = true;
    }

    return result;
}

source_to_data();
refresh_begin();
refresh_end([]);